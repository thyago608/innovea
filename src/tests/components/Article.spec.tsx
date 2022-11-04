import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Article } from "../../components/Article";

const articleMockData = {
  source: {
    id: "1",
    name: "testing",
  },
  author: "John doe",
  title: "This is any title",
  description: "This is any description",
  url: "https://www.lipsum.com/",
  urlToImage:
    "https://images.unsplash.com/photo-1667487175121-caf8bd1b3619?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  publishedAt: "03 de novembro de 2022",
  content: null,
};

describe("Article Component", () => {
  it("should render correctly", () => {
    render(<Article data={articleMockData} />);

    const link = screen.getByRole("link");
    const author = screen.getByText("John doe");
    const title = screen.getByText("This is any title");
    const description = screen.getByText("This is any description");

    expect(link).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("should redirect the user to the given href", () => {
    render(<Article data={articleMockData} />);

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", articleMockData.url);
  });
});
