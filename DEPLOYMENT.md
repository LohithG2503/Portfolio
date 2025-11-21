# Firebase App Hosting Deployment Guide

This portfolio is configured for Firebase App Hosting, which is the recommended hosting solution for Next.js applications.

## Prerequisites

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase (if not already done):
   ```bash
   firebase init
   ```
   - Select "App Hosting"
   - Choose your Firebase project
   - The configuration is already set up in `apphosting.yaml`

## Deployment Steps

### Option 1: Deploy via Firebase Console (Recommended)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to **App Hosting** in the left sidebar
4. Click **Create app** or select your existing app
5. Connect your GitHub repository (if using GitHub)
6. Firebase will automatically build and deploy your app

### Option 2: Deploy via Firebase CLI

1. Build the project locally (optional, Firebase will build automatically):
   ```bash
   npm run build
   ```

2. Deploy to Firebase App Hosting:
   ```bash
   firebase apphosting:backends:create
   firebase apphosting:backends:deploy
   ```

## Configuration Files

- **`apphosting.yaml`**: Firebase App Hosting configuration
  - `maxInstances: 1` - Adjust based on your traffic needs

## Build Configuration

The project is configured with:
- ✅ TypeScript type checking enabled
- ✅ ESLint enabled
- ✅ Image optimization enabled
- ✅ Production optimizations enabled
- ✅ React Strict Mode enabled

## Environment Variables

If you need environment variables:
1. Go to Firebase Console → App Hosting → Your App → Settings
2. Add environment variables in the configuration section

## Troubleshooting

- **Build fails**: Check the build logs in Firebase Console
- **Type errors**: Run `npm run typecheck` locally before deploying
- **Lint errors**: Run `npm run lint` locally before deploying

## Post-Deployment

After deployment, your site will be available at:
- `https://your-project-id.web.app`
- `https://your-project-id.firebaseapp.com`

Custom domains can be configured in Firebase Console → Hosting → Custom domains.

