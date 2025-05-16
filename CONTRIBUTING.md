# Contributing to Signal Evidence Library

Thank you for considering contributing to the Signal Evidence Library! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and considerate of others when contributing to this project.

## How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development Setup

1. Clone the repository
2. Install dependencies: `pip install -r requirements.txt`
3. Run the setup script: `python scripts/setup.py`
4. Create sample data: `python scripts/create_samples.py`
5. Start the API server: `python run_api.py`
6. Start the web server: `python run_web.py`

## Adding Content

To add new evidence-based recommendations:

1. Create a JSON file with the recommendation data
2. Use the content processor to process the data
3. Add the processed data to the recommendation store
4. Update the vector store with the new recommendation

## Testing

Please ensure all tests pass before submitting a pull request.

## Documentation

Please update documentation as needed when making changes.
