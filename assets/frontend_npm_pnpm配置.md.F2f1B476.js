import{_ as p,c as s,o as n,U as a}from"./chunks/framework.Lp4q01XK.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/npm/pnpm配置.md","filePath":"frontend/npm/pnpm配置.md"}'),t={name:"frontend/npm/pnpm配置.md"},e=a(`<h2 id="pnpm-配置指南" tabindex="-1">pnpm 配置指南 <a class="header-anchor" href="#pnpm-配置指南" aria-label="Permalink to &quot;pnpm 配置指南&quot;">​</a></h2><p>背景<br> 使用 npm 时，依赖每次被不同的项目使用，都会重复安装一次。 而在使用 pnpm 时，依赖会被存储在内容可寻址的存储中，所以：</p><p>如果你用到了某依赖项的不同版本，只会将不同版本间有差异的文件添加到仓库。 例如，如果某个包有100个文件，而它的新版本只改变了其中1个文件。那么 pnpm update 时只会向存储中心额外添加1个新文件，而不会因为仅仅一个文件的改变复制整新版本包的内容。 所有文件都会存储在硬盘上的某一位置。 当软件包被被安装时，包里的文件会硬链接到这一位置，而不会占用额外的磁盘空间。 这允许你跨项目地共享同一版本的依赖。 因此，您在磁盘上节省了大量空间，这与项目和依赖项的数量成正比，并且安装速度要快得多！</p><ol><li>安装 Windows 使用 PowerShell： <code>iwr https://get.pnpm.io/install.ps1 -useb | iex</code> 或者 <code>npm install -g @pnpm/exe</code></li></ol><p>在 Alpine Linux 上</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># bash</span></span>
<span class="line"><span>wget -qO- https://get.pnpm.io/install.sh | ENV=&quot;$HOME/.bashrc&quot; SHELL=&quot;$(which bash)&quot; bash -</span></span>
<span class="line"><span># sh</span></span>
<span class="line"><span>wget -qO- https://get.pnpm.io/install.sh | ENV=&quot;$HOME/.shrc&quot; SHELL=&quot;$(which sh)&quot; sh -</span></span>
<span class="line"><span># dash</span></span>
<span class="line"><span>wget -qO- https://get.pnpm.io/install.sh | ENV=&quot;$HOME/.dashrc&quot; SHELL=&quot;$(which dash)&quot; dash -</span></span></code></pre></div><ol start="2"><li><p>安装nodejs 这里按照16版本 <code>pnpm env use --global 16 </code></p></li><li><p>配置依赖存放路径 <code>pnpm config set store-dir E:/pnpm</code></p></li><li><p>然后就可以使用pnpm i 进行安装</p></li></ol>`,7),o=[e];function i(l,c,h,d,r,m){return n(),s("div",null,o)}const g=p(t,[["render",i]]);export{u as __pageData,g as default};
