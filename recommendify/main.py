import os
from flask import Flask, redirect, request, session, url_for
from spotipy import Spotify
from spotipy.oauth2 import SpotifyOAuth
from spotipy.cache_handler import FlaskSessionCacheHandler


app = Flask(__name__)
app.config["SECRET_KEY"] = os.urandom(64)


client_id = "56b31c58aba643beb0554672171cb102"
client_secret = "086769aa0ed04100bb5ef650a7e46562"
redirect_uri = "http://localhost:5000/callback"
scope = "playlist-read-private"

cache_handler = FlaskSessionCacheHandler(session)
sp_oauth = SpotifyOAuth(
    client_id=client_id,
    client_secret=client_secret,
    redirect_uri=redirect_uri,
    scope=scope,
    cache_handler=cache_handler,
    show_dialog=True,
)

sp = Spotify(auth_manager=sp_oauth)


@app.route("/")
def home():
    if not sp_oauth.validate_token(cache_handler.get_cached_token()):
        auth_url = sp_oauth.get_authorize_url()
        return redirect(auth_url)
    return redirect(url_for("get_playlists"))


@app.route("/callback")
def callback():
    sp_oauth.get_access_token(request.args["code"])
    return redirect(url_for("get_playlists"))


@app.route("/playlists")
def get_playlists():
    if not sp_oauth.validate_token(cache_handler.get_cached_token()):
        auth_url = sp_oauth.get_authorize_url()
        return redirect(auth_url)

    playlist = sp.current_user_playlists()
    playlists_info = [
        (pl["name"], pl["external_urls"]["spotify"]) for pl in playlist["items"]
    ]
    playlist_html = "<br>".join(
        [f'<a href="{url}">{name}</a>' for name, url in playlists_info]
    )
    return playlist_html


@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("home"))


if __name__ == "__main__":
    app.run(debug=True)
