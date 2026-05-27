# Cloudflare Pages Deployment

This project is a static website and can be deployed directly from GitHub to Cloudflare Pages.

## GitHub Repository

Repository:

```text
https://github.com/fanmir26/eog-ev-parts
```

## Cloudflare Pages Setup

1. Log in to Cloudflare:

   ```text
   https://dash.cloudflare.com
   ```

2. Go to:

   ```text
   Workers & Pages -> Pages -> Create a project
   ```

3. Choose:

   ```text
   Connect to Git
   ```

4. Select GitHub and authorize Cloudflare if prompted.

5. Choose this repository:

   ```text
   fanmir26/eog-ev-parts
   ```

6. Use these build settings:

   ```text
   Project name: eog-ev-parts
   Production branch: main
   Framework preset: None
   Build command: leave empty
   Build output directory: /
   Root directory: /
   ```

7. Click:

   ```text
   Save and Deploy
   ```

8. After deployment, Cloudflare will provide a preview domain similar to:

   ```text
   https://eog-ev-parts.pages.dev
   ```

## Future Update Flow

After editing the website locally:

```bash
git add .
git commit -m "Update website"
git push
```

Cloudflare Pages will automatically redeploy after each push to `main`.

## Custom Domain

After the first deployment succeeds:

1. Open the Pages project.
2. Go to `Custom domains`.
3. Add your domain, for example:

   ```text
   eogevparts.com
   ```

4. Follow Cloudflare's DNS instructions.

If the domain is already managed by Cloudflare, the DNS connection is usually automatic.
