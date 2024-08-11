// Part of the CVTerminal class
class CVTerminal {
  // ... other properties and methods ...

  // Method to handle the 'experience' command
  writeSection(sectionName) {
    if (sectionName === "experience") {
      const experienceData = this.cv[sectionName];
      this.displayExperience(experienceData);
    }
    // ... handle other sections ...
  }

  // Method to display experience data
  displayExperience(experienceData) {
    experienceData.forEach(item => {
      this.terminal.writeln(item);
    });
  }

  // ... rest of the class ...
}

// Example usage
const terminalConfigurations = {
  // ... other configurations ...
  cv: {
    // ... other sections ...
    experience: [
      "DevOps Engineer | Accenture (Apr 2023 - Present)",
      "Key Responsibilities: Deployment Delivery, Pipeline Maintenance, Tool Assessment",
      "Technologies: AWS, Azure, Docker, CI/CD with GitHub Actions",
      // Add more experience items here
    ],
    // ... other sections ...
  }
};

window.onload = () => {
  new CVTerminal(terminalConfigurations);
};
