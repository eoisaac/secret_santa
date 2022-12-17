import { GithubLogo } from 'phosphor-react'
import { version } from '../../../../package.json'

export const Footer = () => {
  return (
    <footer className="w-full bg-violet-100">
      <div
        className="mx-auto flex w-full max-w-5xl items-center justify-between
      p-4 text-sm text-slate-500"
      >
        <div>
          <a href="https://github.com/eoisaac" target="_blank" rel="noreferrer">
            Isaac
          </a>
          <span>&copy; 2022</span>
        </div>
        <div className="inline-flex gap-1">
          <div>
            <span className="text-xs">v</span>
            <span>{version}</span>
          </div>

          <a
            href="https://github.com/eoisaac/secret_santa"
            target="_blank"
            className="h-min text-base"
            title="Open GitHub repository"
            rel="noreferrer"
          >
            <GithubLogo weight="bold" />
            <span className="sr-only">Open GitHub repository</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
