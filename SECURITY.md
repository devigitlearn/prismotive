
# Security Policy

## Project Status

Prismotive is currently under development.

No stable production release has been published.

## Supported Versions

Security support commitments will be documented when the
first stable release becomes available.

## Reporting a Vulnerability

Please do not publicly disclose an exploitable vulnerability
before maintainers have had an opportunity to investigate it.

To report a vulnerability, use GitHub's private vulnerability
reporting feature when enabled for this repository.

Repository:

https://github.com/devigitlearn/prismotive

If private vulnerability reporting is not enabled, please
contact the maintainer through an appropriate private channel
before sharing exploit details.

Do not publish sensitive vulnerability details in a public issue.

## Security Principles

Prismotive aims to:

- Avoid unnecessary runtime dependencies.
- Validate externally supplied configuration.
- Avoid unsafe HTML injection.
- Preserve consumer-owned DOM elements.
- Release resources after animation destruction.
- Minimise interaction with browser globals.
- Review dependency updates.
- Avoid executing dynamically supplied code.

These are engineering objectives, not guarantees that the
current implementation is free from vulnerabilities.
