<script lang=ts>
    export let href: string;
</script>

<a href={href} class="fixed z-20 bottom-0 left-0 w-full h-12 bg-accent-600 hover:text-white text-white dark:bg-accent-200 dark:text-black no-underline hover:dark:text-black flex items-center justify-around not-content">
    <div class="flex items-center gap-1">
        <p style="font-weight: 400 !important;" class="hover:text-white text-white dark:text-black no-underline hover:dark:text-black"><slot></slot></p>
        <svg aria-hidden="true" style="margin-top: 1px !important; --sl-icon-size: 1.3rem;" class="astro-yjy4zhro astro-c6vsoqas hover:text-white text-white dark:text-black no-underline hover:dark:text-black" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.33 10.18a1 1 0 0 1-.77 0 1 1 0 0 1-.62-.93l.01-1.83-8.2 8.2a1 1 0 0 1-1.41-1.42l8.2-8.2H14.7a1 1 0 0 1 0-2h4.25a1 1 0 0 1 1 1v4.25a1 1 0 0 1-.62.93Z"></path><path d="M11 4a1 1 0 1 1 0 2H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4a1 1 0 1 1 2 0v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4Z"></path></svg>
    </div>
</a> 

<div class="w-full h-12"></div>