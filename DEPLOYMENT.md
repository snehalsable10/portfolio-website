# Deployment Guide

## 🚀 Quick Deploy to Vercel

Your portfolio is ready to deploy! Follow these steps:

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**: Visit [vercel.com](https://vercel.com)
2. **Import Project**: Click "Add New" → "Project"
3. **Connect GitHub**: Select `snehalsable10/portfolio-website`
4. **Configure Build Settings**:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. **Deploy**: Click "Deploy" and wait 2-3 minutes

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## 🔗 Post-Deployment Steps

### 1. Update Project Links
After deployment, update these placeholder links in your code:

**In `src/components/Projects.jsx`**:
- Replace `demo: '#'` with actual project demo URLs
- Replace `github: '#'` with actual GitHub repository URLs

**In `src/components/Achievements.jsx`**:
- Replace `link: '#'` with actual certification URLs

### 2. Add Custom Domain (Optional)
1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain (e.g., `snehalsportfolio.com`)
3. Update DNS records as instructed

### 3. Enable Analytics
1. Go to Vercel Dashboard → Your Project → Analytics
2. Enable Vercel Analytics for visitor insights

## 📝 Environment Variables (If Needed)

If you add EmailJS or other services later:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variables like:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

## 🔄 Automatic Deployments

Every push to `main` branch will automatically deploy to production!

- **Production**: `main` branch
- **Preview**: Other branches get preview URLs

## 📊 Expected Build Output

```
✓ building for production...
✓ 1234 modules transformed
✓ built in 15.23s
dist/index.html                   1.23 kB
dist/assets/index-abc123.css     12.34 kB
dist/assets/index-xyz789.js     234.56 kB
```

## 🎯 Performance Tips

- Images are optimized
- Code splitting enabled
- Lazy loading implemented
- Tailwind CSS purged

## 🐛 Troubleshooting

### Build Fails
- Check Node.js version (should be 18.x or higher)
- Verify all dependencies in `package.json`
- Check for syntax errors in components

### Blank Page After Deploy
- Check browser console for errors
- Verify all imports are correct
- Check if assets are loading

## 📱 Testing Your Deployment

After deployment, test:
- ✅ All sections load correctly
- ✅ Navigation works smoothly
- ✅ Links open in new tabs
- ✅ Mobile responsiveness
- ✅ Form submission (if implemented)
- ✅ Resume download works

## 🎉 Your Portfolio is Live!

Once deployed, your portfolio will be available at:
- **Vercel URL**: `https://portfolio-website-[random].vercel.app`
- **Custom Domain**: `https://yourdomain.com` (if configured)

Share your portfolio:
- Add to LinkedIn profile
- Include in resume
- Share on Twitter/X
- Add to GitHub profile README

---

**Need Help?** Check [Vercel Documentation](https://vercel.com/docs) or reach out!