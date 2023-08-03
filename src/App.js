import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <NavBar />
        <LoadingBar height={3} color="#f11946" progress={this.state.progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                key="general"
                pageSize={15}
                category="general"
                apiKey={this.apiKey}
              />
            }
          />
          <Route
            path="/React-Project2-NewsApp"
            element={
              <News
                setProgress={this.setProgress}
                key="general"
                pageSize={15}
                category="general"
                apiKey={this.apiKey}
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                key="business"
                pageSize={15}
                category="business"
                apiKey={this.apiKey}
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                key="entertainment"
                pageSize={15}
                category="entertainment"
                apiKey={this.apiKey}
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                pageSize={15}
                category="health"
                apiKey={this.apiKey}
              />
            }
          />
          <Route
            key="science"
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                key="health"
                pageSize={15}
                category="science"
                apiKey={this.apiKey}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                key="sports"
                pageSize={15}
                category="sports"
                apiKey={this.apiKey}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                key="technology"
                pageSize={15}
                category="technology"
                apiKey={this.apiKey}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}
