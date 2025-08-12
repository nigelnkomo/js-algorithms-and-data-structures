# JavaScript Algorithms and Data Structures

This repository contains my ongoing practice and learning journey with JavaScript algorithms and data structures. It includes my solutions to common problems and exercises from various resources, including Colt Steele's Udemy course.

---

## Contents

* **Data Structures:** Implementations of common data structures like arrays, linked lists, stacks, and queues.
* **Algorithms:** Solutions to classic algorithms such as sorting, searching, and recursion.
* **Practice Problems:** Solutions to challenges from tutorials and coding platforms.

---

## Folder Structure

* `ten-ways-to-reverse-a-string-in-js/` — Methods to reverse a string, based on Eddy Mann’s tutorial.
* `data-structures/linked-list/` — My implementation of a linked list.
* `algorithms/sorting/` — Different sorting algorithms like Bubble Sort and Quick Sort.

---

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/js-algorithms-and-data-structures.git](https://github.com/yourusername/js-algorithms-and-data-structures.git)
    ```
2.  **Run the code:**
    Navigate to a folder and execute a file using Node.js. For example:
    ```bash
    cd ten-ways-to-reverse-a-string-in-js
    node index.js
    ```

---

## Attribution and Acknowledgements

This project was inspired by and uses concepts from the following resources:
* [**Colt Steele's "JavaScript Algorithms and Data Structures Masterclass"**](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)
* [**Eddy Mann's "Ten Ways to Reverse a String in JavaScript"**](https://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/) - The inspiration for the string reversal solutions.

---

## License

This repository is licensed under the **MIT License**

---

## Contributing

Contributions, feedback, and suggestions are welcome! Feel free to open issues or submit pull requests.

## My Git Learning Log

This section serves as a personal log of the new Git commands and concepts I've learned while working on this project.

### Saving Your Work and Recording Changes

To save work and record changes, I used:

```bash
git add <files>
git commit -m "Descriptive commit message"
```

### Renaming Files

To rename files tracked by Git, I used:

```bash
git mv oldfilename newfilename
git commit -m "Rename files with descriptive names"
```

### Editing Commit History

To edit previous commit messages or content, I learned to use interactive rebase:

```bash
git rebase -i HEAD~N
# Replace N with how many commits back you want to edit.
# Or use "git rebase -i --root" to see all commit messages
```

Then I changed pick to reword (to edit the message) or edit (to amend content).

### Amending Commits

When stopped during a rebase or after a normal commit, I used the --amend flag to change the last commit's message or author:

```bash
git commit --amend -m "New commit message"
git commit --amend --author="Your Name <newemail@example.com>"
``` 

### Continuing Rebase

After making my edits, I continued the rebase with this command:
Bash

```bash
git rebase --continue
```