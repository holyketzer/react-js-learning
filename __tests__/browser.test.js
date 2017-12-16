import nightmare from 'nightmare';

const url = 'http://localhost:3333';

describe('When visit the homepage', () => {
  it('welcomes the user', async () => {
    let page = nightmare().goto(url);
    let text = await page.evaluate(() => (document.body.textContent)).end();

    expect(text).toContain('Super React.js blog');
  });

  it('likes the post',async () => {
    let page = nightmare()
      .goto(url)

    let likesCount = await page
      .evaluate(
        () => (document.querySelector('.block-item.like button span').innerText)
      ).end()

    page.click('.block .like');

    page
      .evaluate(
        () => (document.querySelector('.block-item.like button span').innerText)
      ).then((newLikesCount) => {
        expect(+newLikesCount).toEqual(+likesCount + 1);
      });
  });
});
