import React, { useEffect, useContext } from "react";
import Context from "./Context";
import Album from "./Album";

function AlbumsList() {
  const ctx = useContext(Context);

  const fetchList = () => {
    const url = "https://itunes.apple.com/us/rss/topalbums/limit=100/json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.feed.entry);
        ctx.dispatch({ type: "setAlbums", payload: data.feed.entry });
      });
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div id="albums">
      {ctx.filterList.length === 0
        ? ctx.albums.map((album, index) => (
            <Album
              key={album.id.attributes["im:id"]}
              sr_no={index + 1}
              name={album["im:name"].label}
              artist={album["im:artist"].label}
              totalSongs={album["im:itemCount"].label}
              r_date={album["im:releaseDate"].attributes.label}
              price={album["im:price"].label}
              category={album.category.attributes.label}
              link={album.link.attributes.href}
              rights={album.rights.label}
            />
          ))
        : ctx.filterList.map((album, index) => (
            <Album
              key={album.id.attributes["im:id"]}
              sr_no={index + 1}
              name={album["im:name"].label}
              artist={album["im:artist"].label}
              totalSongs={album["im:itemCount"].label}
              r_date={album["im:releaseDate"].attributes.label}
              price={album["im:price"].label}
              category={album.category.attributes.label}
              link={album.link.attributes.href}
              rights={album.rights.label}
            />
          ))}
    </div>
  );
}

export default AlbumsList;
