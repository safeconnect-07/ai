
export const LANGUAGES = [
  { id: 'javascript', name: 'JavaScript' },
  { id: 'python', name: 'Python' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'java', name: 'Java' },
  { id: 'go', name: 'Go' },
];

export const DEFAULT_CODE = {
  python: `import os

def get_user_data(user_id):
    # This is a vulnerable function
    query = "SELECT * FROM users WHERE id = " + user_id
    db.execute(query)

def process_file(filename):
    # This function has a potential bug
    f = open(filename, 'r')
    content = f.read()
    print(content)
`,
  javascript: `function calculateTotal(items) {
  let total = 0;
  // This loop could be a classic off-by-one error
  for (var i = 0; i <= items.length; i++) { 
    total += items[i].price;
  }
  return total;
}

function fetchData(url) {
  // Missing error handling for fetch
  fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
}
`,
  typescript: `interface User {
  name: String; // Using String instead of string
  age: number;
}

function greetUser(user: User) {
  if (user.age > 18) {
    var message = "Hello, " + user.name; // var has function scope
  }
  // message is accessible here, which might not be intended
  return message; 
}
`,
  java: `public class MyClass {
    public static void main(String args[]) {
        String input = null;
        // This will throw a NullPointerException
        if (input.equals("TEST")) {
            System.out.println("Input is TEST");
        }
        
        // Unused variable
        int unusedVar = 10;
    }
    
    // Inefficient string concatenation in a loop
    public String buildString(String[] parts) {
        String result = "";
        for (int i = 0; i < parts.length; i++) {
            result += parts[i];
        }
        return result;
    }
}
`,
  go: `package main

import "fmt"

func main() {
    // This will cause a deadlock
    ch := make(chan int)
    ch <- 1
    fmt.Println(<-ch)
}

func checkSlice(s []int) {
    // Potential panic if slice is empty
    if s[0] == 1 {
        fmt.Println("Starts with 1")
    }
}
`,
};
