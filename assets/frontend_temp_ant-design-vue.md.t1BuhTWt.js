import{_ as s,c as a,o as n,U as t}from"./chunks/framework.Lp4q01XK.js";const u=JSON.parse('{"title":"ant-design-vue模板","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/temp/ant-design-vue.md","filePath":"frontend/temp/ant-design-vue.md"}'),p={name:"frontend/temp/ant-design-vue.md"},l=t(`<h1 id="ant-design-vue模板" tabindex="-1">ant-design-vue模板 <a class="header-anchor" href="#ant-design-vue模板" aria-label="Permalink to &quot;ant-design-vue模板&quot;">​</a></h1><p>常用模板</p><h2 id="form" tabindex="-1">form <a class="header-anchor" href="#form" aria-label="Permalink to &quot;form&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a-form</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">formState</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;formStateRef&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">label-col</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;110px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rules</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;a-form-item label=&quot;规则名称：&quot; name=&quot;ruleName&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;a-input v-model:value.trim=&quot;formState.ruleName&quot; /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/a-form-item&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a-form</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="modal" tabindex="-1">modal <a class="header-anchor" href="#modal" aria-label="Permalink to &quot;modal&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import { ref } from &quot;vue&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let visible = ref&lt;boolean&gt;(false);</span></span>
<span class="line"><span>let loading = ref&lt;boolean&gt;(false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const onSubmit = () =&gt; {};</span></span>
<span class="line"><span>const open = async () =&gt; {</span></span>
<span class="line"><span>  visible.value = true;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>defineExpose({</span></span>
<span class="line"><span>  open,</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;a-modal v-model:visible=&quot;visible&quot; title=&quot;TT&quot;&gt;</span></span>
<span class="line"><span>    &lt;template #footer&gt;</span></span>
<span class="line"><span>      &lt;a-button @click=&quot;visible = false&quot;&gt;取消&lt;/a-button&gt;</span></span>
<span class="line"><span>      &lt;a-button type=&quot;primary&quot; :loading=&quot;loading&quot; @click=&quot;onSubmit&quot;&gt;保存&lt;/a-button&gt;</span></span>
<span class="line"><span>    &lt;/template&gt;</span></span>
<span class="line"><span>  &lt;/a-modal&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped lang=&quot;less&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div><h2 id="drawer" tabindex="-1">drawer <a class="header-anchor" href="#drawer" aria-label="Permalink to &quot;drawer&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>import {ref} from &quot;vue&quot;;</span></span>
<span class="line"><span>import {ArrowRightOutlined} from &quot;@ant-design/icons-vue&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let visible = ref&lt;boolean&gt;(false);</span></span>
<span class="line"><span>let loading = ref&lt;boolean&gt;(false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const onSubmit = () =&gt; {</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>const open = async () =&gt; {</span></span>
<span class="line"><span>  visible.value = true;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>const close = () =&gt; {</span></span>
<span class="line"><span>  visible.value = false;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>defineExpose({</span></span>
<span class="line"><span>  open,</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;a-drawer v-model:visible=&quot;visible&quot; :width=&quot;1000&quot; :maskCloseable=&quot;false&quot;&gt;</span></span>
<span class="line"><span>    &lt;template #closeIcon&gt;&lt;ArrowRightOutlined /&gt;&lt;/template&gt;</span></span>
<span class="line"><span>    &lt;template #title&gt;&lt;/template&gt;</span></span>
<span class="line"><span>    &lt;template #extra&gt;</span></span>
<span class="line"><span>      &lt;a-button style=&quot;margin-right: 8px&quot; @click=&quot;close&quot;&gt;取消&lt;/a-button&gt;</span></span>
<span class="line"><span>      &lt;a-button type=&quot;primary&quot; @click=&quot;onSubmit&quot;&gt;保存&lt;/a-button&gt;</span></span>
<span class="line"><span>    &lt;/template&gt;</span></span>
<span class="line"><span>  &lt;/a-drawer&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped lang=&quot;less&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre></div>`,8),i=[l];function e(o,h,r,c,k,d){return n(),a("div",null,i)}const E=s(p,[["render",e]]);export{u as __pageData,E as default};
