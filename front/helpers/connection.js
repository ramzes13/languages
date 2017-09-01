class Connection {
  getGameList() {
    return new Promise((resolve) => {
      resolve({});
    });
  }

  getGameData(id) {
    return new Promise((resolve) => {
      resolve({});
    });
  }

  sendMoveTile(tile) {
    this.socket.emit('tile_move', { id: 'todo', position: tile.position });
  }
}

export default Connection;
