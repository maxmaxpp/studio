
export default function SiteFooter() {
  return (
    <footer className="py-8 bg-transparent backdrop-blur-md">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Heymaxx.site. All rights reserved.
      </div>
    </footer>
  );
}
