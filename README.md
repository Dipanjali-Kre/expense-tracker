# Expense Tracker

This is a simple React.js application to track your expenses. It allows you to add expenses with a category, amount, and date, view a summary of total spending, see a breakdown of spending by category with a simple bar chart, and filter expenses by a specific date range.

## Features

*   **Add Expenses**: Easily input new expenses with details like category, amount, and date.
*   **Expense List**: View all recorded expenses with an option to delete them.
*   **Total Spending Summary**: Get an instant overview of your total expenditure.
*   **Category Breakdown**: See how your spending is distributed across different categories, visualized with a CSS-based bar chart.
*   **Date Filtering**: Filter your expenses to view spending within a specific date range.
*   **Persistent Data**: Expenses are saved in your browser's local storage, so your data persists even if you close the tab.

## Technologies Used

*   React.js
*   HTML5
*   CSS3
*   JavaScript (ES6+)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your system.

*   [Node.js & npm](https://nodejs.org/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/expense-tracker.git
    cd expense-tracker
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Application

To start the development server:

```bash
npm start
```

This will open the application in your browser at `http://localhost:3000` (or another available port). The page will reload if you make edits.

### Building for Production

To build the application for production to the `build` folder:

```bash
npm run build
```

It correctly bundles React in production mode and optimizes the build for the best performance.

## Usage

1.  **Add Expense**: Use the "Add New Expense" form to input the category, amount, and date of your spending. Click "Add Expense" to save it.
2.  **View Expenses**: All added expenses will appear in the "Expense History" list.
3.  **Delete Expense**: Click the "Delete" button next to any expense item to remove it.
4.  **Filter Expenses**: Use the "Filter by Date" section to select a start and end date. Only expenses within this range will be displayed in the list and included in the summary/breakdown.
5.  **Summary & Breakdown**: The "Summary" card shows your total spending, and the "Category Breakdown" card visualizes how much you've spent in each category.

## Project Structure

```
expense-tracker/
├── public/
│   ├── index.html
│   └── ... (other public assets)
├── src/
│   ├── components/
│   │   ├── CategoryBreakdown.js
│   │   ├── CategoryBreakdown.css
│   │   ├── DateFilter.js
│   │   ├── DateFilter.css
│   │   ├── ExpenseForm.js
│   │   ├── ExpenseForm.css
│   │   ├── ExpenseItem.js
│   │   ├── ExpenseItem.css
│   │   ├── ExpenseList.js
│   │   ├── ExpenseList.css
│   │   ├── Summary.js
│   │   └── Summary.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
└── ... (other config files)
```

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open source and available under the [MIT License](LICENSE).
