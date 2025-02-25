# Component Overview

This document provides an overview of the components used in the project.
- Core components are the true basic components, that are just defined "as themselves"
- Composite components somehow wrap core components, or combine multiple
- Screens now finally are composed of all sorts of components and are the finally displayed pages of the system. They must be inserted using routing.

Detailed documentation for all components can be found in the storybook
```bash
npm run storybook
```

## **Core Components**

| Component | Short description                                                                      | Link                                                   |
|-----------|----------------------------------------------------------------------------------------|--------------------------------------------------------|
| Button    | Standard component for any action trigger by clicking it                               | [Button.tsx](../src/components/core/button/Button.tsx) |
| Link      | Navigation link within app                                                             | [Link.tsx](../src/components/core/link/Link.tsx)       |
| Stack     | Layout component to stack elements (vertically / horizontally with controlled spacing) | [Stack.tsx](../src/components/core/stack/Stack.tsx)    |


## **Composite Components**

Composite components are made by combining core components to form more complex UI elements:

1. **Navbar**
   - A composite component for the top navigation bar. Includes app logo, navigation links, and user profile/settings (optional).
   - **File:** `src/components/composite/Navbar.tsx`
   - **Styles:** Tailwind CSS utilities.

2. **Sidebar**
   - A composite component for side navigation within screens. Includes links or sections for navigation within the same screen.
   - **File:** `src/components/composite/Sidebar.tsx`
   - **Styles:** Tailwind CSS utilities.

3. **SidebarMenu**
   - A complex sidebar menu that combines individual links and sections for better organization.
   - **File:** `src/components/composite/SidebarMenu.tsx`
   - **Styles:** Tailwind CSS utilities.

4. **MainContentArea**
   - A wrapper for the main content area in the layout. Adapts based on screen (e.g., Home or Chatbot screen).
   - **File:** `src/components/composite/MainContentArea.tsx`
   - **Styles:** Tailwind CSS utilities.

## **Screens**

Screens are the full pages in the app that represent a specific view:

1. **HomeScreen**
   - The main landing page of the app with general information or call-to-action buttons.
   - **File:** `src/screens/HomeScreen.tsx`
   - **Styles:** Tailwind CSS utilities and basic layout.

2. **ChatbotScreen**
   - The chatbot interface for interacting with the chatbot. Includes a conversation history area, input field, and send button.
   - **File:** `src/screens/ChatbotScreen.tsx`
   - **Styles:** Tailwind CSS utilities and custom chatbot styles.

## **Next Steps**
- Start by implementing each of the components, beginning with the **Button** component.
- Test components in isolation using **Storybook**.
- Implement the **Navbar**, **Sidebar**, and **MainContentArea**.
- Continue with the screens: **HomeScreen** and **ChatbotScreen**.

---

### 📦 **Styles**

- **Tailwind CSS** is used for most of the base styling.
- **Custom SASS** is used for dynamic styles like darkening colors on hover.
- Colors are defined in a separate file (`src/styles/colors.js`), making it easy to manage and reuse colors across the app.

---

### **Testing the Components**

To test the components, we are using **Storybook** for isolated UI development and testing.
- Start Storybook with:
```bash
npm run storybook
```
- Visit **`http://localhost:6006`** to view all the components.

---

### **Conclusion**
This component-based structure ensures a scalable and maintainable project where UI components can be reused and tested easily. The combination of **Tailwind CSS** and **SASS** provides a flexible, customizable styling solution.

