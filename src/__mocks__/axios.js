const mockAxios = jest.genMockFromModule('axios');

// Mocking the axios create method per default.
// As the api pattern uses that to create an api object and all requests are called upon that.
mockAxios.create = jest.fn(() => mockAxios);

export default mockAxios;
