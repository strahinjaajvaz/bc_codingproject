import React, { Component } from "react";
import { getData } from "../api/getData_api";
import Summary from "../components/Summary";
import MyContext from "../context/MyContext";
import Folder from "../components/Folder";
import FileType from "../components/File";

export default class extends Component {
  state = {
    fetching: false,
    data: [],
    error: null
  };

  componentDidMount() {
    this.setState(() => ({ fetching: true }));
    getData()
      .then(res =>
        this.setState(() => ({ data: res.data.data, fetching: false }))
      )
      .catch(err =>
        this.setState(() => ({
          error: "We experienced an error. Please refresh the page." // documented in the README file
        }))
      );
  }

  render() {
    if (this.state.fetching) return <p>Loading...</p>;
    if (this.state.error) return <p>There has been an error loading the data, please refresh.</p>
      return (
        <React.Fragment>
          {this.state.data.map((item, i) => {
            if (item.type === "folder") return <Folder key={i} data={item} />;
            return (
              <MyContext.Consumer key={i}>
                {({ addFile, updateTotalSize }) => (
                  <FileType
                    key={i}
                    data={item}
                    incrementFileCount={addFile}
                    updateFileSize={updateTotalSize}
                  />
                )}
              </MyContext.Consumer>
            );
          })}
          <MyContext.Consumer>
            {({ totalFiles: files, totalFilesSize: totalSize }) => (
              <Summary files={files} totalSize={totalSize} />
            )}
          </MyContext.Consumer>
        </React.Fragment>
      );
  }
}
