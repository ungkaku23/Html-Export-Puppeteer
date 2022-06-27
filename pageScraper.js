const scraperObject = {
	url: process.env.SITE_URL,
	async scraper(browser){
		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);
		await page.goto(this.url);
    // Wait for the required DOM to be rendered
		await page.waitForSelector('.featurearticlecta');
		// Get the link to all the required books
		let urls = await page.$$eval('.dsg-article-block-stacked-img-deep', links => {
			links = links.map(el => ({
				"brief": el.querySelector('.dsg-article-category').textContent,
				"img": el.querySelector('.dsg-article-image').getAttribute("style").split("url('")[1].split("');")[0],
				"title": el.querySelector('h3 > a').textContent.split("\n")[0],
				"href": el.querySelector('h3 > a').href,
				"content": el.querySelector('p').textContent,
			}))
			return links;
		});
		return urls;
		
	}
}

module.exports = scraperObject;