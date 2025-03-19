# CloToGo - Campus Clothing Delivery Service

CloToGo is a campus-focused clothing delivery service that provides Syracuse University students with an easy and convenient way to shop for clothing from popular name-brand stores such as H&M, Old Navy, and American Eagle.

## Features

- Easy ordering process
- Delivery to dorms and off-campus residences
- Support for multiple retailers (H&M, Old Navy, American Eagle)
- Secure payment processing with Stripe
- Real-time order tracking
- Student-friendly pricing

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Stripe Payment Integration
- React

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/clotogo.git
cd clotogo
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
  app/
    page.tsx (Home page)
    order/
      page.tsx (Order form)
    about/
      page.tsx (About page)
  components/
    ui/ (Reusable UI components)
    layout/ (Layout components)
  lib/
    stripe.ts (Stripe configuration)
  types/
    index.ts (TypeScript types)
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 