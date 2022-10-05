import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CardAlbums extends Component {
  render() {
    const { album, artist } = this.props;
    if (!album) {
      return null;
    }
    if (album.length === 0) {
      return <h1>Nenhum álbum foi encontrado</h1>;
    }
    return (
      <div>
        <p>{`Resultado de álbuns de: ${artist}`}</p>
        <div
          style={
            { backgroundColor: '#E9EC63',
              marginTop: '5px' }
          }
        >
          {album.map((m, i) => (
            <>
              <p key={ i }>{`${m.collectionName}`}</p>
              <Link
                data-testid={ `link-to-album-${m.collectionId}` }
                to={ `/album/${m.collectionId}` }
              >
                Detalhes
              </Link>
              ;
            </>
          ))}
        </div>
      </div>
    );
  }
}
CardAlbums.propTypes = {
  album: PropTypes.arrayOf(PropTypes.shape({
    artistId: PropTypes.number,
    artistName: PropTypes.string,
    collectionId: PropTypes.number,
    collectionName: PropTypes.string,
    collectionPrice: PropTypes.number,
    artworkUrl100: PropTypes.string,
    releaseDate: PropTypes.string,
    trackCount: PropTypes.number,
  })),
  artist: PropTypes.string.isRequired,
};

CardAlbums.defaultProps = {
  album: [],
};