import {
  DefaultNavbarExample,
  CustomLogoExample,
  CustomAuthExample,
  MinimalNavbarExample,
  CustomNavLinksExample,
  ExternalLinksExample,
  MobileOnlyExample,
  DarkThemeExample,
  CompleteCustomExample,
} from '@/components/dev/NavbarExamples';

export default function NavbarsPage() {
  return (
    <div className="navbar-examples-container">
      <h1>Navbar Examples</h1>

      <section>
        <h2>Default Navbar</h2>
        <DefaultNavbarExample />
      </section>

      <section>
        <h2>Minimal Navbar</h2>
        <MinimalNavbarExample />
      </section>

      <section>
        <h2>Custom Logo</h2>
        <CustomLogoExample />
      </section>

      <section>
        <h2>Custom Auth Buttons</h2>
        <CustomAuthExample />
      </section>

      <section>
        <h2>Custom Navigation Links</h2>
        <CustomNavLinksExample />
      </section>

      <section>
        <h2>External Links</h2>
        <ExternalLinksExample />
      </section>

      <section>
        <h2>Mobile Only</h2>
        <MobileOnlyExample />
      </section>

      <section>
        <h2>Dark Theme</h2>
        <DarkThemeExample />
      </section>

      <section>
        <h2>Complete Custom Configuration</h2>
        <CompleteCustomExample />
      </section>
    </div>
  );
}
