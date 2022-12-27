import Header from '~/components/displays/Header';
import LearnMoreBlock from '~/components/displays/LearnMoreBlock';
import Footer from '~/components/displays/Footer';
import FloatingButton from '~/components/buttons/FloatingButton';

export default function Home() {
  return (
    <>
      <Header />
      <form class="h-50vh bg-indigo-200 flex-(~ col) gap-4 items-center justify-end pb-24">
        <h1 class="text-5rem">How can we help?</h1>
        <p class="w-2/5 relative">
          <input class="border-1 rounded p-4 bg-white w-full h-16 text-lg" placeholder="Search" />
          <button type="submit" class="i-bi-arrow-right absolute right-4 inset-y-0 text-2rem hocus:text-blue-600">
            Submit
          </button>
        </p>
      </form>
      <article class="h-screen grid-(~ cols-2) items-center place-content-center gap-y-24 px-1/10">
        <LearnMoreBlock img="/images/branch.png" title="Using Abstract" description="Abstract lets you manage, version, and document your designs in one place." link="/" />
        <LearnMoreBlock img="/images/peoples.png" title="Manage your account" description="Configure your account settings, such as your email, profile details, and password." link="/" />
        <LearnMoreBlock img="/images/puzzle.png" title="Manage organizations, teams, and projects" description="Use Abstract organizations, teams, and projects to organize your people and your work." link="/" />
        <LearnMoreBlock img="/images/dollar.png" title="Manage billing" description="Change subscriptions and payment details." link="/" />
        <LearnMoreBlock img="/images/key.png" title="Authenticate to Abstract" description="Set up and configure SSO, SCIM, and Just-in-Time provisioning." link="/" />
        <LearnMoreBlock img="/images/chat.png" title="Abstract support" description="Get in touch with a human." link="/" />
      </article>
      <Footer />
      <FloatingButton />
    </>
  );
}
