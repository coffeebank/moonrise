# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x     | :white_check_mark: |
| < 1.x   | :x:                |

## How Vulnerabilities in Moonrise Work

There are not usually vulnerabilities in Moonrise. While GitHub may report security issues, they are often in the dependencies used to build your website.

Once your final site is generated and live on GitHub Pages, there is generally nothing much to hack. You are only serving -- essentially -- glorified text files to visitors of your Moonrise site.

Moonrise was made for running even without servers.

## Reporting a Vulnerability

If you have found a vulnerability, or there is a backlog of dependencies that need updating, feel free to start a GitHub Issue.

The usual process for updating dependencies is to run `bundle update` rather than accept Dependabot's Pull Requests. This is because there are usually other dependencies that likely need updating too. However, Dependabot is kept active in this repo to raise alerts. I usually test dependency updates before pushing them out, so they may build up a small backlog before I get to them.

The usual process for fixing vulnerabilities is to patch them as they come in. You can join the Discord or Matrix to discuss fixes in real-time.
