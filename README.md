# Risksek-Assignment

# live link - https://risksek-assignment.netlify.app/

# Test Cases -

describe("TableLayout", () => {
  it("renders correctly", () => {
    render(<TableLayout />);
    expect(screen.getByText("Sr.No")).toBeInTheDocument();
  });

  it("loads product list on mount", async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({ products: [] }),
    });
    render(<TableLayout />);
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(2));
  });

  it("filters product list by title", () => {
    const { getByPlaceholderText, getByDisplayValue } = render(<TableLayout />);
    const input = getByPlaceholderText("Search");
    const select = getByDisplayValue("Title");
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.change(select, { target: { value: "title" } });
    expect(screen.queryByText("test")).toBeInTheDocument();
  });

  it("handles pagination correctly", () => {
    const { getByText } = render(<TableLayout />);
    fireEvent.click(getByText("2"));
    expect(screen.queryByText("11")).toBeInTheDocument();
  });
});
