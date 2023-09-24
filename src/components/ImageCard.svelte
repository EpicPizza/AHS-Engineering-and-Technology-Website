<script lang=ts>
    export let name: string;
    export let description: string;
    export let src: string;
    export let href: string;
</script>

<div class="card w-full sl-flex border-neutral-300 dark:border-neutral-700 border-[1px] p-4 flex items-center">
    <img alt="Subclub Logo" src="{src}" class="w-20 h-20 rounded-full"/>
    <div class="not-content ml-4 grow" style="margin-top: 0px;">
        <h4 class="text-2xl">{name}</h4>
        <p class="mt-1">{description}</p>
    </div>
    <a href="{href}" class="min-w-[2rem] ml-2">
        <slot></slot>
    </a>
</div>