<div align="center">

# 🚀 YC Directory

### A Modern Startup Directory Platform

*Discover, explore, and connect with innovative startups in the Y Combinator ecosystem*

[![Next.js](https://img.shields.io/badge/Next.js-15.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Sanity](https://img.shields.io/badge/Sanity-CMS-red?style=for-the-badge&logo=sanity)](https://www.sanity.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Sentry](https://img.shields.io/badge/Sentry-Monitoring-362D59?style=for-the-badge&logo=sentry)](https://sentry.io/)

[📱 Live Demo](https://yc-directory-demo.vercel.app) • [📚 Documentation](#documentation) • [🐛 Report Bug](https://github.com/PavanBollepalli/yc-directory/issues) • [✨ Request Feature](https://github.com/PavanBollepalli/yc-directory/issues)

</div>

---

## 📋 Table of Contents

- [🎯 About](#about)
- [✨ Features](#features)
- [🛠️ Tech Stack](#tech-stack)
- [⚡ Prerequisites](#prerequisites)
- [🚀 Installation](#installation)
- [💻 Usage](#usage)
- [📖 API Documentation](#api-documentation)
- [📸 Screenshots](#screenshots)
- [🔧 Configuration](#configuration)
- [🧪 Testing](#testing)
- [🚧 Troubleshooting](#troubleshooting)
- [🤝 Contributing](#contributing)
- [📄 License](#license)
- [📞 Support](#support)
- [🙏 Acknowledgments](#acknowledgments)

---

## 🎯 About

YC Directory is a comprehensive startup discovery platform that showcases innovative companies from the Y Combinator ecosystem. Built with modern web technologies, it provides entrepreneurs, investors, and startup enthusiasts with an intuitive interface to explore, filter, and connect with promising startups.

**Target Audience:**
- 👥 Entrepreneurs seeking inspiration and networking opportunities
- 💼 Investors looking for promising startups to fund
- 🎓 Students and researchers studying the startup ecosystem
- 📰 Journalists and analysts covering the tech industry

[⬆️ Back to top](#-yc-directory)

---

## ✨ Features

- 🔍 **Advanced Search & Filtering** - Find startups by industry, funding stage, location, and more
- 📊 **Real-time Data** - Up-to-date information powered by Sanity CMS
- 🎨 **Modern UI/UX** - Responsive design with Tailwind CSS and Radix UI components
- 🔐 **Authentication** - Secure user authentication with NextAuth.js
- 📝 **Rich Content Editor** - Markdown support for detailed startup descriptions
- 🌐 **SEO Optimized** - Built-in SEO features for better discoverability
- 📱 **Mobile Responsive** - Optimized for all device sizes
- ⚡ **Performance Monitoring** - Integrated Sentry for error tracking and performance monitoring
- 🎯 **Type Safety** - Full TypeScript support for robust development
- 🚀 **Server-Side Rendering** - Fast loading with Next.js 15 App Router

[⬆️ Back to top](#-yc-directory)

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | Next.js 15, React 19, TypeScript |
| **Styling** | Tailwind CSS, Radix UI, Lucide Icons |
| **Backend** | Next.js API Routes, Server Actions |
| **Database/CMS** | Sanity CMS |
| **Authentication** | NextAuth.js v5 |
| **Monitoring** | Sentry |
| **Editor** | React MD Editor, EasyMDE |
| **Deployment** | Vercel (recommended) |

[⬆️ Back to top](#-yc-directory)

---

## ⚡ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v10.5.2 or higher)
- **Git**

Optional but recommended:
- **VS Code** with TypeScript extensions
- **Vercel CLI** for deployment

[⬆️ Back to top](#-yc-directory)

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/PavanBollepalli/yc-directory.git
cd yc-directory
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_sanity_read_token
SANITY_API_WRITE_TOKEN=your_sanity_write_token

# NextAuth Configuration
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Authentication Providers
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Sentry Configuration (Optional)
SENTRY_DSN=your_sentry_dsn
SENTRY_ORG=your_sentry_org
SENTRY_PROJECT=your_sentry_project
```

### 4. Sanity Setup

```bash
# Generate TypeScript types for Sanity
npm run typegen

# Start Sanity Studio (optional)
npx sanity dev
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

[⬆️ Back to top](#-yc-directory)

---

## 💻 Usage

### Basic Usage

1. **Browse Startups**: Visit the homepage to explore the startup directory
2. **Search & Filter**: Use the search bar and filters to find specific startups
3. **View Details**: Click on any startup card to view detailed information
4. **Authentication**: Sign in to access additional features

### Code Examples

#### Fetching Startup Data

```typescript
import { client } from '@/sanity/lib/client'

async function getStartups() {
  const startups = await client.fetch(`
    *[_type == "startup"]{
      _id,
      title,
      slug,
      author,
      views,
      description,
      category,
      image,
      pitch
    }
  `)
  return startups
}
```

#### Creating a New Startup Entry

```typescript
import { writeClient } from '@/sanity/lib/write-client'

async function createStartup(data: StartupFormData) {
  const result = await writeClient.create({
    _type: 'startup',
    title: data.title,
    description: data.description,
    category: data.category,
    pitch: data.pitch,
    author: {
      _type: 'reference',
      _ref: data.authorId
    }
  })
  return result
}
```

[⬆️ Back to top](#-yc-directory)

---

## 📖 API Documentation

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/startups` | Fetch all startups |
| `GET` | `/api/startups/[id]` | Fetch startup by ID |
| `POST` | `/api/startups` | Create new startup |
| `PUT` | `/api/startups/[id]` | Update startup |
| `DELETE` | `/api/startups/[id]` | Delete startup |

### Response Format

```json
{
  "success": true,
  "data": {
    "_id": "startup_id",
    "title": "Startup Name",
    "description": "Brief description",
    "category": "Technology",
    "views": 150,
    "author": {
      "name": "Author Name",
      "email": "author@example.com"
    }
  },
  "message": "Success"
}
```

[⬆️ Back to top](#-yc-directory)

---

## 📸 Screenshots

### Homepage
![Homepage](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=YC+Directory+Homepage)

### Startup Details
![Startup Details](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Startup+Details+Page)

### Search & Filter
![Search](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Search+%26+Filter+Interface)

[⬆️ Back to top](#-yc-directory)

---

## 🔧 Configuration

### Sanity Schema Configuration

The project uses Sanity as a headless CMS. Key schemas include:

- **Author**: User profiles and authentication data
- **Startup**: Main startup information
- **Category**: Startup categories and tags

### Tailwind Configuration

Custom Tailwind configuration in `tailwind.config.js`:

```javascript
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // Custom theme extensions
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography")
  ],
}
```

[⬆️ Back to top](#-yc-directory)

---

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure

```
tests/
├── __mocks__/
├── components/
├── pages/
├── utils/
└── setup.ts
```

[⬆️ Back to top](#-yc-directory)

---

## 🚧 Troubleshooting

### Common Issues

#### Build Errors

**Issue**: TypeScript compilation errors
```bash
# Solution: Regenerate Sanity types
npm run typegen
```

**Issue**: Missing environment variables
```bash
# Solution: Check .env.local file exists and contains all required variables
cp .env.example .env.local
```

#### Development Issues

**Issue**: Sanity client connection errors
- Verify your Sanity project ID and dataset
- Check API tokens have correct permissions
- Ensure Sanity project is accessible

**Issue**: Authentication not working
- Verify NextAuth configuration
- Check OAuth provider settings
- Ensure NEXTAUTH_SECRET is set

#### Performance Issues

**Issue**: Slow page loads
- Enable Next.js caching
- Optimize images with next/image
- Review Sanity query performance

### Getting Help

1. Check the [GitHub Issues](https://github.com/PavanBollepalli/yc-directory/issues)
2. Review the [Next.js Documentation](https://nextjs.org/docs)
3. Consult the [Sanity Documentation](https://www.sanity.io/docs)

[⬆️ Back to top](#-yc-directory)

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

### Pull Request Process

1. Ensure all tests pass
2. Update README.md if needed
3. Add description of changes
4. Request review from maintainers

[⬆️ Back to top](#-yc-directory)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Pavan Bollepalli

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

[⬆️ Back to top](#-yc-directory)

---

## 📞 Support

### Getting Help

- 📧 **Email**: [your-email@example.com](mailto:your-email@example.com)
- 💬 **GitHub Discussions**: [Start a discussion](https://github.com/PavanBollepalli/yc-directory/discussions)
- 🐛 **Bug Reports**: [Create an issue](https://github.com/PavanBollepalli/yc-directory/issues/new?template=bug_report.md)
- ✨ **Feature Requests**: [Request a feature](https://github.com/PavanBollepalli/yc-directory/issues/new?template=feature_request.md)

### Community

- 🐦 **Twitter**: [@YourTwitterHandle](https://twitter.com/yourtwitterhandle)
- 💼 **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- 🌐 **Website**: [your-website.com](https://your-website.com)

[⬆️ Back to top](#-yc-directory)

---

## 🙏 Acknowledgments

Special thanks to the following projects and contributors:

- **[Y Combinator](https://www.ycombinator.com/)** - For inspiring the startup ecosystem
- **[Next.js Team](https://nextjs.org/)** - For the amazing React framework
- **[Sanity](https://www.sanity.io/)** - For the flexible headless CMS
- **[Vercel](https://vercel.com/)** - For seamless deployment platform
- **[Tailwind CSS](https://tailwindcss.com/)** - For the utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - For accessible UI components

### Contributors

Thanks to all the people who have contributed to this project! 🎉

<!-- Contributors will be automatically generated -->

[⬆️ Back to top](#-yc-directory)

---

<div align="center">

**[⭐ Star this repo](https://github.com/PavanBollepalli/yc-directory) if you find it helpful!**

Made with ❤️ by [Pavan Bollepalli](https://github.com/PavanBollepalli)

</div>
