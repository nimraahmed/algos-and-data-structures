// Step-by-step explanation at: https://nimraahmed.hashnode.dev/how-to-implement-your-own-browser-history-functionality 


// Node class represents a single node in the doubly linked list
class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
  }
}

// DoublyLinkedList class represents the browser history
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null; // Added current pointer to keep track of the current page
  }

  // Method to add a new page to the browser history
  addPage(page) {
    const newNode = new Node(page);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.current = newNode; // Set current page to the newly added page
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Method to navigate to the previous page in the history
  navigateBack() {
    if (this.current !== null && this.current.previous !== null) {
      this.current = this.current.previous;

      // Simulate navigating to the previous page (print for demonstration)
      console.log("Navigating back to the previous page:", this.current.data);
    } else {
      console.log("No previous page in the browser history.");
    }
  }

  // Method to navigate to the next page in the history
  navigateForward() {
    if (this.current !== null && this.current.next !== null) {
      this.current = this.current.next;

      // Simulate navigating to the next page (print for demonstration)
      console.log("Navigating forward to the next page:", this.current.data);
    } else {
      console.log("No next page in the browser history.");
    }
  }

  // Method to display the current browser history
  displayHistory() {
    let current = this.head;
    let history = "";

    while (current !== null) {
      if (current === this.current) {
        history += "[" + current.data + "] -> "; // Highlight the current page
      } else {
        history += current.data + " -> ";
      }
      current = current.next;
    }

    history += "null";
    console.log("Browser History: ", history);
  }
}

// Example usage
const browserHistory = new DoublyLinkedList();

browserHistory.addPage("Home");
browserHistory.addPage("About");
browserHistory.addPage("Products");
browserHistory.addPage("Contact");

browserHistory.displayHistory(); // Output: Browser History:  [Home] -> About -> Products -> Contact -> null

browserHistory.navigateBack(); // Output: No previous page in the browser history.

browserHistory.navigateForward(); // Output: Navigating forward to the next page: About

browserHistory.displayHistory(); // Output: Browser History:  Home -> [About] -> Products -> Contact -> null
