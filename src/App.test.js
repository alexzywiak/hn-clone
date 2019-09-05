import React from "react";
import { render, cleanup, wait, fireEvent } from "react-testing-library";
import fetchMock from "fetch-mock";
import App from "./App";

const articles = [
  {
    author: "johnsteinbeck",
    comment_text: null,
    created_at: "2017-05-05T14:14:17.000Z",
    created_at_i: 1493993657,
    num_comments: 155,
    objectID: "14273548",
    parent_id: null,
    points: 395,
    relevancy_score: 7406,
    story_id: null,
    story_text: null,
    story_title: null,
    story_url: null,
    title: "Grapes of Wrath",
    url: "https://tomjoad.com"
  },
  {
    author: "thomaspynchon",
    comment_text: null,
    created_at: "2017-05-05T14:14:17.000Z",
    created_at_i: 1493993657,
    num_comments: 155,
    objectID: "14273549",
    parent_id: null,
    points: 395,
    relevancy_score: 7406,
    story_id: null,
    story_text: null,
    story_title: null,
    story_url: null,
    title: "Literarymindmess",
    url: "https://v.com"
  }
];

const mockResponse = {
  hits: articles
};

describe("App", () => {
  beforeEach(() => {
    fetchMock.reset();
    fetchMock.get("*", mockResponse);
  });
  afterEach(cleanup);

  it("renders a card with title for each article", async () => {
    const { getByText } = render(<App />);
    await wait();
    articles.forEach(({ title }) => {
      getByText(title);
    });
  });

  it("renders a card with author for each article", async () => {
    const { getByText } = render(<App />);
    await wait();
    articles.forEach(({ author }) => {
      getByText(author);
    });
  });

  it("queries api for search term after hitting submit", async () => {
    const { getByTestId, getByText } = render(<App />);
    const searchTerm = "notallwhowanderarelost";
    await wait();

    fireEvent.change(getByTestId("search-input"), {
      target: { value: searchTerm }
    });
    expect(fetchMock.lastUrl()).toMatch(new RegExp(`query=redux`));
    fireEvent.click(getByText("Search"));

    await wait();

    expect(fetchMock.lastUrl()).toMatch(new RegExp(`query=${searchTerm}`));
  });
});
