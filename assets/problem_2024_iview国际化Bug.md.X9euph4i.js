import{_ as s,c as i,o as a,U as n}from"./chunks/framework.Ukhmux41.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"problem/2024/iview国际化Bug.md","filePath":"problem/2024/iview国际化Bug.md"}'),h={name:"problem/2024/iview国际化Bug.md"},t=n(`<h2 id="使用新版vue-in18配iview-4-x-bug" tabindex="-1">使用新版vue-in18配iview 4.x Bug <a class="header-anchor" href="#使用新版vue-in18配iview-4-x-bug" aria-label="Permalink to &quot;使用新版vue-in18配iview 4.x Bug&quot;">​</a></h2><p>在使用iview组件 $Modal.confirm 的时候出错</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vue.esm.js:5126</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [Vue </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">warn]:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Error</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> render:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;TypeError: Cannot read properties of undefined (reading &#39;_t&#39;)&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">found</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Roo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vue.esm.js:3785</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TypeError:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Cannot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> read</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> properties</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (reading </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;_t&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Vue.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$t (vue-i18n.esm.js:255:1)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Vue.i18nHandler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (iview.js:9010:1)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Vue.t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (iview.js:9015:1)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Vue.t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (iview.js:707:1)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Vue.localeOkText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (iview.js:40545:1)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Watcher.get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (vue.esm.js:4182:1)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Watcher.evaluate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (vue.esm.js:4283:1)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Proxy.computedGetter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (vue.esm.js:4508:1)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Proxy.render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (iview.js:40465:1)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Vue._render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (vue.esm.js:2550:1)</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vue.esm.js:5126</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [Vue </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">warn]:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Error</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mounted</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hook:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;TypeError: Cannot read properties of undefined (reading &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$parent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;)&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">found</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">AutoDistributionWarehouseRul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/views/orderSettings/components/orderSettings/autoDistributionWarehouseRule.vue</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">       &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Layout&gt;...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (1 </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">recursive</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">         &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Main&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/components/layout/main.vue</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">           &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Root&gt;</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vue.esm.js:3785</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TypeError:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Cannot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> read</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> properties</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (reading </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;$parent&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Object.show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (iview.js:40602:1)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> confirm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (iview.js:40327:1)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> _confirm2.default.confirm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (iview.js:40367:1)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> VueComponent.mounted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (autoDistributionWarehouseRule.vue:409:1)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> invokeWithErrorHandling</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (vue.esm.js:3753:1)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> callHook</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (vue.esm.js:3253:1)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Object.insert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (vue.esm.js:4944:1)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> invokeInsertHook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (vue.esm.js:6975:1)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Vue.patch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [as </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">__patch__]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (vue.esm.js:7189:1)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Vue._update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (vue.esm.js:2990:1)</span></span></code></pre></div><h3 id="处理" tabindex="-1">处理 <a class="header-anchor" href="#处理" aria-label="Permalink to &quot;处理&quot;">​</a></h3><p>去掉 配置国际化里面的</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code"><code><span class="line diff remove"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vue.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">locale</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};  </span></span></code></pre></div>`,9),l=[t];function e(k,p,r,F,d,E){return a(),i("div",null,l)}const o=s(h,[["render",e]]);export{y as __pageData,o as default};
