# Frontend: Next.js

## Original creation
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
- Further information on setup and utilized tools, see [here](./SetupGuide.md)

Is started as part of the whole MedAgent project, see [here](../README.md#installation).

Further notes:
- To test ONLY frontend, can start with: `npm run dev` (requires having npm installed)
- To ONLY view individual components, run: `npm run storybook`

## MedAgent
Every page in our frontend will have same three basic blocks:

<!--suppress CheckImageSize -->
<center><img src="assets/visualization_frontend/frontend_blocks.png" width="60%" alt="basic blocks"></center>

The Top-Navigation pan allows navigation between:
- Home menu (Providing overview over content)
- Different pages like "Chatbot", "Knowledge", "Workflow Design", ...
- This pan varies based on the user (not all users have access to all pages)

The Sidebar pan can be toggled (show / do not show) and contains different content based on the current page. But it overall provides sub-navigation for the main working block.
- Example for Chatbot Page: Select which workflow to use for the concrete interaction.

Finally, the Main Working Block captures the main interaction, depending on the current page and selected sub-navigation.
- Example for Chatbot Page: The actual interaction with some Chatbot (can input text, and get out answers)

### Structure of project
```
├─ 📁 src/
│  ├─ 📁 components/        # with according story files
│  │  ├─ 📁 core/           # Basic components (Button, ...)
│  │  ├─ 📁 composite/      # Complex components (Modal, ...)
│  │  └─ 📁 screens/        
│  ├─ 📁 styles/            # All css files
│  ├─ 📁 types/             # Shared prop types
│  └─ 📁 app/               # Entry point for Next.js application
│     ├─ layout.tsx         # Root layout
│     └─ page.tsx           # Main page
├─ ...
└─ README.md        
```

