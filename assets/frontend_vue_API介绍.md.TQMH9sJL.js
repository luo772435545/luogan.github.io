import{_ as s,c as a,o as n,U as p}from"./chunks/framework.Ukhmux41.js";const g=JSON.parse('{"title":"API 介绍","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/vue/API介绍.md","filePath":"frontend/vue/API介绍.md"}'),e={name:"frontend/vue/API介绍.md"},i=p(`<h1 id="api-介绍" tabindex="-1">API 介绍 <a class="header-anchor" href="#api-介绍" aria-label="Permalink to &quot;API 介绍&quot;">​</a></h1><h2 id="effectscope" tabindex="-1">effectScope <a class="header-anchor" href="#effectscope" aria-label="Permalink to &quot;effectScope&quot;">​</a></h2><p>实例EffectScope可以收集在同步函数中运行的效果，以便稍后可以将这些效果一起处理。</p><p>比如下面这个例子,只在小于100的时候进行监听响应</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  import { computed, effectScope, ref, watch, watchEffect } from &quot;vue&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const counter = ref(1);</span></span>
<span class="line"><span>  const scope = effectScope();</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  scope.run(() =&gt; {</span></span>
<span class="line"><span>    const doubled = computed(() =&gt; counter.value * 2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    watch(doubled, () =&gt; console.log(doubled.value));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    watchEffect(() =&gt; console.log(&quot;Count: &quot;, doubled.value));</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 处理掉当前作用域内的所有 effect</span></span>
<span class="line"><span>  watch(counter, (value) =&gt; {</span></span>
<span class="line"><span>    if (Number(value) &gt; 100) {</span></span>
<span class="line"><span>      scope.stop();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;input v-model=&quot;counter&quot; /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre></div><h2 id="css-中的-v-bind" tabindex="-1">CSS 中的 v-bind() <a class="header-anchor" href="#css-中的-v-bind" aria-label="Permalink to &quot;CSS 中的 v-bind()&quot;">​</a></h2><p>单文件组件的 style 标签支持使用 v-bind CSS 函数将 CSS 的值链接到动态的组件状态</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;text&quot;&gt;hello&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      color: &#39;red&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>.text {</span></span>
<span class="line"><span>  color: v-bind(color);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h1 id="app-runwithcontext" tabindex="-1">app.runWithContext() <a class="header-anchor" href="#app-runwithcontext" aria-label="Permalink to &quot;app.runWithContext()&quot;">​</a></h1><p>注入的回调函数</p><h1 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h1><p>首先有三个，onMounted onUpdated onUnMounted 分别是 挂载完成、dom 变化、卸载之后 然后3个 before onActivated 在使用了keepalive， 当组件插入dom 的时候触发 onDe activated 在使用了keepalive,当组件移除dom的时候触发 SSR 时候用的，onServicePrefetch 在服务器渲染 onErrorCaptured 捕获 后台传递错误 还有2个开发模式下针对响应性的 onRenderTracked 组件渲染过程中 追踪 到响应式依赖时调用 onRenderTriggered 响应式依赖变更 触发了 组件渲染时调用</p><h2 id="v-memo" tabindex="-1">v-memo <a class="header-anchor" href="#v-memo" aria-label="Permalink to &quot;v-memo&quot;">​</a></h2><p>做性能优化用的，假设值都没变化，那么就跳过渲染</p><div class="language-textmate vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">textmate</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;div v-memo=&quot;[valueA, valueB]&quot;&gt;</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><h2 id="v-cloak" tabindex="-1">v-cloak <a class="header-anchor" href="#v-cloak" aria-label="Permalink to &quot;v-cloak&quot;">​</a></h2><p>用于隐藏尚未完成编译的DOM模板</p><h2 id="withdirectives" tabindex="-1">withDirectives() <a class="header-anchor" href="#withdirectives" aria-label="Permalink to &quot;withDirectives()&quot;">​</a></h2><p>用于给 vnode 增加自定义指令。</p><h2 id="withmodifiers" tabindex="-1">withModifiers <a class="header-anchor" href="#withmodifiers" aria-label="Permalink to &quot;withModifiers&quot;">​</a></h2><p>用于向事件处理函数添加内置 v-on 修饰符。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { h, withModifiers } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> vnode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> h</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;button&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 等价于 v-on:click.stop.prevent</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  onClick: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withModifiers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }, [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;stop&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;prevent&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div>`,22),t=[i];function l(o,c,h,r,d,k){return n(),a("div",null,t)}const v=s(e,[["render",l]]);export{g as __pageData,v as default};
