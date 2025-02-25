# Component Overview

This document provides an overview of the components used in the project.

## **Core Components**

Core components are basic building blocks that are reused throughout the app:

1. **Button**
   - A standard button component used for actions. Supports `label`, `onClick`, `disabled`, and `children` (for custom content like icons).
   - **Features:** Primary, secondary, and disabled states, along with hover effects.
   - **File:** `src/components/core/Button.tsx`
   - **Styles:** Tailwind CSS and custom SASS (for dynamic color changes).

2. **Link**
   - A component for navigation links within the app. Used in the top navigation bar and sidebar.
   - **File:** `src/components/core/Link.tsx`
   - **Styles:** Tailwind CSS utilities.

3. **Icon**
   - A generic icon component for scalable vector icons.
   - **File:** `src/components/core/Icon.tsx`
   - **Styles:** Tailwind CSS classes for sizes and colors.

4. **Stack**
   - A layout component used to stack elements vertically with controlled spacing.
   - **File:** `src/components/core/Stack.tsx`
   - **Styles:** Tailwind CSS utilities.

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

