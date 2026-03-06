import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-xl font-bold">Norrdesk</h1>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
            <Button size="sm">Get started</Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="container mx-auto px-4 py-24 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Welcome to Norrdesk
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Your modern workspace platform. Streamline operations, collaborate
            effortlessly, and get things done.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg">Get started</Button>
            <Button variant="outline" size="lg">
              Learn more
            </Button>
          </div>
        </section>

        {/* Feature cards */}
        <section className="container mx-auto px-4 pb-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Get an overview of your workspace with real-time metrics and
                  activity feeds.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Work together with your team in real-time. Share, comment, and
                  iterate faster.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Track performance and make data-driven decisions with powerful
                  analytics tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Norrdesk. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
