<script context="module" lang=ts>
    type Events = {
        name: string,
        location: string,
        timing: Timing
    }[];

    type Timing = {
        date: Date,
        when: string,
    } | {
        starts: Date,
        ends: Date,
    }

    let events: undefined | Promise<Events> = undefined;

    async function getEvents() {
        if(events == undefined) {
            events = new Promise(async (resolve) => {
                const res = await fetch('https://ahs-engineering-and-technology-calendar.vercel.app/calendar/main');

                const json = await res.json();

                resolve(json.events);
            })
        }

        return await events;
    }
</script>

<script lang=ts>
    import { onMount } from "svelte";
    import format from 'date-and-time';
    import meridiem from 'date-and-time/plugin/meridiem';

    format.plugin(meridiem);
    
    export let order: number = 1;

    let name = "";
    let location = "";
    let date = "";
    let empty = false;

    onMount(async () => {
        const events = await getEvents();

        if(order > events.length - 1) {
            empty = true;
            return;
        }

        location = events[order].location;
        name = events[order].name;

        let timing = events[order].timing
        
        if('date' in timing) {
            date = format.format(new Date(timing.date), "ddd, MMM D") + " at " + timing.when;
        } else {
            date = format.format(new Date(timing.starts), "ddd, MMM D") + " at " + format.format(new Date(timing.starts), "h:mm a") + " - " + format.format(new Date(timing.ends), "h:mm a")
        }

        loading = false;
    })

    let loading = true;
</script>

{#if !empty}
    <div class="card not-content relative {order == 0 ? "bg-accent-600 dark:bg-accent-200 rounded-lg" : "border-[1px] border-neutral-300 dark:border-neutral-700"} p-4 md:p-6 flex {loading ? "items-center justify-around" : "flex-col"} gap-1 md:gap-1.5 w-full">
        {#if loading}
            <div class="w-8 h-8 my-8 border-[3px] border-b-transparent border-l-transparent border-r-transparent {order == 0 ? "border-t-white dark:border-t-dark" : "border-t-black dark:border-t-white"} rounded-full animate-spin"></div>
        {:else}
            <p class="{order == 0 ? "text-white dark:text-black" : ""} md:text-lg">{date}</p>
            <h4 class="{order == 0 ? "text-white dark:text-black" : ""} text-xl md:text-2xl">{name}</h4>
            <p class="{order == 0 ? "text-white dark:text-black" : ""} nd:text-lg">{location}</p>
        {/if}
    </div>
{/if}