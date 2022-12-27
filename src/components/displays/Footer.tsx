import FooterNav from '~/components/displays/FooterNav';

export default function Footer() {
  return (
    <footer class="bg-black text-white grid-(~ cols-5) h-40vh p-(y12 x20)">
      <FooterNav
        title="Abstract"
        links={[
          { label: 'Start Trial', link: '/' },
          { label: 'Pricing', link: '/' },
          { label: 'Download', link: '/' },
        ]}
      />
      <FooterNav
        title="Resources"
        links={[
          { label: 'Blog', link: '/' },
          { label: 'Help Center', link: '/' },
          { label: 'Release Notes', link: '/' },
          { label: 'Status', link: '/' },
        ]}
      />
      <FooterNav
        title="Community"
        links={[
          { label: 'Twitter', link: '/' },
          { label: 'LinkedIn', link: '/' },
          { label: 'Facebook', link: '/' },
          { label: 'Dribbble', link: '/' },
          { label: 'Podcast', link: '/' },
        ]}
      />
      <FooterNav
        title="Company"
        links={[
          { label: 'About Us', link: '/' },
          { label: 'Careers', link: '/' },
          { label: 'Legal', link: '/' },
        ]}
      >
        <div>
          <h2 class="font-bold">Contact Us</h2>
          <p>info@abstract.com</p>
        </div>
      </FooterNav>
      <div class="self-end text-lg">
        <img src="/logo-small.svg" alt="logo" class="h-10 mb-2" />
        <p>&#169; Copyright 2022</p>
        <p>Abstract Studio Design, Inc.</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
}
