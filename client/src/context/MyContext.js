import React from "react";

const MyContext = React.createContext();
export default MyContext;

export class MyProvider extends React.Component {
  state = {
    totalFiles: 0,
    totalFilesSize: 0 // BYTES
  };

  addFile = () =>
    this.setState(prevState => ({
      totalFiles: prevState.totalFiles + 1
    }));

  updateTotalSize = () =>
    this.setState(prevState => ({
      totalFilesSize: prevState.totalFilesSize + 1
    }));

  render() {
    const { totalFiles, totalFilesSize } = this.state;

    return (
      <MyContext.Provider
        value={{
          totalFiles,
          totalFilesSize,
          addFile: this.addFile.bind(this),
          updateTotalSize: this.updateTotalSize.bind(this)
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
