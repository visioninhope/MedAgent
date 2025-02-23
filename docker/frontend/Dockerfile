# Dockerfile for Next.js frontend
FROM node:20-alpine

# Metadata labels
LABEL org.opencontainers.image.title="MedAgent"
LABEL org.opencontainers.image.description="MedAgent: Medical Guidelines Recommendation System Based on Retrieval Augmented Retrieval and Agentic AI Workflows"
LABEL org.opencontainers.image.authors="Mou YongLi <mou@dbis.rwth-aachen.de>, Meret Unbehaun, Saif Nasir, Nadine Önelmis, Behrus Puladi, Stefan Decker"
LABEL org.opencontainers.image.license="MIT"
LABEL org.opencontainers.image.source="https://github.com/MouYongli/MedAgent"
LABEL org.opencontainers.image.version="0.1.0"
LABEL org.opencontainers.image.documentation="https://github.com/MouYongli/MedAgent#readme"
LABEL org.opencontainers.image.classification="Development Status :: 1 - Alpha, Intended Audience :: Science/Research, Programming Language :: Python :: 3, Topic :: Scientific/Engineering :: Artificial Intelligence"

WORKDIR /app

# copy from build context, should be ../../frontend
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
