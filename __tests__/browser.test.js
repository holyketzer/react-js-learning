import nightmare from 'nightmare';

describe('When visit the homepage', () => {
  it('welcomes the user', async () => {
    let page = nightmare().goto('http://localhost:3333');

    let text = await page.evaluate(() => (document.body.textContent)).end();

    expect(text).toContain('Super React.js blog');
  });
});
