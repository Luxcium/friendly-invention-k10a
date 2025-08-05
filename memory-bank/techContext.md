# Tech Context

See [docs/README.md](docs/README.md) for an overview of Memory Bank documentation.

Use this document to provide a comprehensive overview of the technology stack, development environment, and technical constraints for the project. This context is essential for both human developers and AI agents to understand the project's technical landscape.

- Lists technologies and frameworks used
- Describes development setup
- Notes technical constraints
- Records dependencies and tool configurations
- Example: “React 18, TypeScript, Firebase, Jest for testing”

## Technology Stack

This section outlines the primary technologies and frameworks used in the project, along with their version requirements and constraints.

### Primary Technologies

- **Language**: TypeScript 5.9.x with ES2022 target and strict mode
- **Runtime**: Node.js >=18.0.0 for modern JavaScript features
- **Framework**: Library-focused architecture with modular exports
- **Build Tool**: TypeScript Compiler (tsc) with comprehensive configuration

### Development Dependencies

- **Package Manager**: pnpm >=8.0.0 for fast, efficient dependency management
- **Testing Framework**: Jest 30.x with ts-jest for TypeScript integration
- **Linting Tools**: ESLint 9.x with @typescript-eslint for code quality
- **Development Server**: nodemon + ts-node for live development with hot reload

### Production Dependencies

- **Core Libraries**: Currently minimal - ready for project-specific additions
- **Database Drivers**: To be determined based on project requirements
- **API Clients**: To be added as external integrations are needed
- **Utility Libraries**: Type-only dependencies for enhanced TypeScript experience

## Development Environment

### Required Tools

- **IDE/Editor**: VS Code with TypeScript support and recommended extensions
- **Version Control**: Git with conventional commits and standard workflow
- **Container Tools**: Not currently configured - available for future use
- **Cloud Tools**: Not currently configured - ready for deployment setup

### Environment Setup

```bash
# Installation commands
pnpm install                    # Install all dependencies
pnpm run build                  # Build TypeScript to lib/
pnpm test                       # Run Jest test suite

# Environment configuration
# Ensure Node.js >=18.0.0 is installed
# Ensure pnpm >=8.0.0 is available
# VS Code with TypeScript and ESLint extensions recommended
```

### Local Development Workflow

1. **Start Development**: `pnpm run dev:watch` - Runs ts-node with nodemon for live reload
2. **Run Tests**: `pnpm run test:watch` - Continuous testing with Jest watch mode
3. **Build & Lint**: `pnpm run build && pnpm run lint` - Full verification before commit

## Technical Constraints

### Platform Requirements

- **Operating System**: [Supported OS versions]
- **Hardware Requirements**: [Minimum specs for development]
- **Network Requirements**: [Connectivity and bandwidth needs]

### Performance Constraints

- **Memory Limits**: [RAM usage boundaries]
- **CPU Requirements**: [Processing power needs]
- **Storage Requirements**: [Disk space and I/O performance]
- **Network Latency**: [Response time requirements]

### Security Constraints

- **Authentication Requirements**: [Security protocols required]
- **Data Protection**: [Encryption and privacy requirements]
- **Access Control**: [Permission and authorization models]
- **Audit Requirements**: [Logging and compliance needs]

## Integration Context

### External APIs

- **API 1**: [Purpose, endpoint, authentication method]
- **API 2**: [Purpose, endpoint, authentication method]
- **API 3**: [Purpose, endpoint, authentication method]

### Database Integration

- **Primary Database**: [Type, version, connection approach]
- **Cache Layer**: [Redis, Memcached, etc. if applicable]
- **Search Engine**: [Elasticsearch, Solr, etc. if applicable]

### Message Queues

- **Queue System**: [RabbitMQ, Kafka, SQS, etc. if applicable]
- **Event Streaming**: [Real-time data processing if applicable]

## Tool Usage Patterns

### Code Quality Tools

- **Linter Configuration**: [ESLint, Pylint, etc. - specific rules]
- **Formatter Settings**: [Prettier, Black, etc. - formatting rules]
- **Type Checking**: [TypeScript, mypy, etc. - configuration]

### Testing Strategy

- **Unit Testing**: [Framework and patterns used]
- **Integration Testing**: [Approach and tools]
- **End-to-End Testing**: [Browser testing, API testing tools]
- **Performance Testing**: [Load testing tools and approach]

### Deployment Tools

- **CI/CD Pipeline**: [GitHub Actions, Jenkins, etc.]
- **Container Registry**: [Docker Hub, ECR, etc.]
- **Infrastructure as Code**: [Terraform, CloudFormation, etc.]
- **Monitoring Tools**: [Application and infrastructure monitoring]

## Configuration Management

### Environment Variables

```bash
# Required environment variables
VARIABLE_1=description_and_example_value
VARIABLE_2=description_and_example_value
VARIABLE_3=description_and_example_value
```

### Configuration Files

- **Development**: [Local development configuration]
- **Testing**: [Test environment configuration]
- **Staging**: [Pre-production configuration]
- **Production**: [Production environment configuration]

### Secrets Management

- **Secret Storage**: [How secrets are stored and accessed]
- **Key Rotation**: [How secrets are rotated and updated]
- **Access Control**: [Who can access which secrets]

## AI Agent Tool Configuration

### Code Generation Settings

- **Language Standards**: [Coding conventions and style guides]
- **Import Preferences**: [How to handle dependencies and imports]
- **Error Handling**: [Standard patterns for error management]
- **Documentation**: [Comment and documentation standards]

### Development Workflow Integration

- **File Watching**: [Auto-reload and hot-reload configuration]
- **Build Automation**: [When and how builds are triggered]
- **Test Automation**: [When tests run and how results are handled]

### Cross-Agent Coordination

- **Shared Toolchain**: [Tools all AI agents should use consistently]
- **Configuration Sync**: [How tool configurations stay aligned]
- **Conflict Resolution**: [How to handle conflicting tool requirements]

## AI Agent Instructions

### Environment Compliance

- **MANDATORY**: Verify all required tools are available before code generation
- **MANDATORY**: Follow established coding standards and linting rules
- **MANDATORY**: Use specified dependency versions and package managers

### Tool Usage Requirements

- **MANDATORY**: Run tests after code changes using specified frameworks
- **MANDATORY**: Format code using configured formatters before committing
- **MANDATORY**: Validate environment variables and configuration before deployment

### Integration Requirements

- **MANDATORY**: Verify external API connectivity and authentication
- **MANDATORY**: Test database connections and migrations
- **MANDATORY**: Confirm deployment pipeline compatibility
