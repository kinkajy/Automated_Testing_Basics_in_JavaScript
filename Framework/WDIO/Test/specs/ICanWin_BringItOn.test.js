
describe('Test suite', () => {

    it('I Can Win', async () => {
        await browser.url('https://pastebin.com');
        await $('//*[@id="qc-cmp2-ui"]/div[2]/div/button[2]').click();
        await $('#postform-text').setValue('Hello from WebDriver');
        await $('//*[@id="select2-postform-expiration-container"]').click();
        await $('/html/body/span[2]/span/span[2]/ul/li[3]').click();
        await $('#postform-name').setValue('helloweb');
        await $('//*[@id="w0"]/div[5]/div[1]/div[10]/button').click();
    });

    it('Bring It On', async () => {
        await browser.url('https://pastebin.com');
        await $('//*[@id="qc-cmp2-ui"]/div[2]/div/button[2]').click();
        await $('#postform-text').setValue('git config --global user.name "New Sheriff in Town" git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code" git push origin master --force');
        await $('#select2-postform-format-container').click();
        await $('/html/body/span[2]/span/span[2]/ul/li[2]/ul/li[1]').click();
        await $('#select2-postform-expiration-container').click();
        await $('/html/body/span[2]/span/span[2]/ul/li[3]').click();
        await $('#postform-name').setValue('how to gain dominance among developers');
        await $('//*[@id="w0"]/div[5]/div[1]/div[10]/button').click();


        const pasteName = await $("div[class='info-top'] h1");
        expect(await pasteName.getText()).toEqual('how to gain dominance among developers');

        const syntax = await $('a[href="/archive/bash"]');
        expect(await syntax.getText()).toEqual('Bash');

        const pasteText = await $("//div[@class='de1']");
        expect(await pasteText.getText()).toEqual('git config --global user.name "New Sheriff in Town" git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code" git push origin master --force');

    });
});
