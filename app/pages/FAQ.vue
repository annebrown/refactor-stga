<!--------@/pages/FAQ.vue------------------------------------------------------>
<template><div>
<NuxtLayout name="pages">

<!-- Flex -->
<div class="flex-col columns-1 md:columns-2 gap-1 bg-(--ui-bg) rounded-xl">

     <!-- Q1 -->
    <div class="faq">
        <div class="faq-item-colored">
            <p class="faq-q">
                1. Where is this property that is being considered for  development?
            </p>
            
            <p class="text-justify py-2">
                It is approximately 20 acres of land spanning from the eastern edge of the Gillies Grove Nature Reserve, south to Harrington Street, north to the Ottawa River and east to John Street. The piece effectively wraps around the Galilee Center buildings and cemetery, and is best illustrated by this map.
            </p>
            <div class="my-5 mr-5 w-full">
                <img src="/images/answer/map.svg" alt="map" loading="eager" priority width={1301} height={1148} />
            </div>
        </div>
    </div>
    
     <!-- Q2 -->
    <div class="faq">
        <div class="faq-item">
            <p class="faq-q">
                2. What is the current zoning of this piece of land? 
            </p>
            <p class="text-justify p-2">
            The land is predominantly zoned as &apos;Future Development&apos; with a small strip along the river that is zoned as &apos;Environmentally Protected&apos;.  
            </p>
        </div>
    </div>

     <!-- Q3 -->
    <div class="faq">
        <div class="faq-item-colored">
            <p class="faq-q">
                3. What will the development be? 
            </p>
            <p class="text-justify p-2">
                At this time we have heard no official plans about what is being considered for the development of this property. After Cavanagh announced that they would be waiving their due diligence period, they did confirm that a housing development is in their plans. The word we have received from Cavanagh is that they intend to build single family homes and townhomes. No affordable housing will be included in the development.
            </p>
        </div>
    </div>

     <!-- Q4 -->
    <div class="faq">
        <div class="faq-item">
            <p class="faq-q">
                4. Why haven&apos;t I heard about this?
            </p>
            <p class="text-justify p-2">
                There has been little made public about this, and most of the information shared from the Galilee Center has been after the fact. The Town themselves were never consulted regarding the future of this land. Unless you are on the Galilee Center’s mailing list or know someone who is, you probably have not heard about this.
            </p>
        </div>
    </div>

     <!-- Q5 -->
    <div class="faq">
        <div class="faq-item-colored">
            <p class="faq-q">
                5. What stage is the sale at now?
            </p>
            <p class="text-justify p-2">
                Cavanagh has announced that they will be proceeding with the purchase of the property, but there are still a number of steps that must be taken before the land officially changes hands. One of the key first steps is the application to sever the land from the larger Galilee property. We heard from the Town on December 18th that this application was recently submitted. If this is approved, the next step will be to apply to rezone the property which must be approved by the Town and usually involves a public consultation process. 
            </p>
        </div>
    </div>

     <!-- Q6 -->
    <div class="faq">
        <div class="faq-item">
            <p class="faq-q">
                6. But, isn&apos;t this just a sale between two private parties?
            </p>
            <p class="text-justify p-2">
                This argument can be made for insignificant property changes, such as when property will not be altered in any substantial way. This becomes a weak argument when land is being changed dramatically. There are limits to what can be built where, especially when it comes to protecting environmentally and culturally significant lands. Town planning and community involvement must be able to help steer land alterations when those changes will affect the environment and the community in such a profound way. This is one of those times.
            </p>
        </div>
    </div>

     <!-- Q7 -->
    <div class="faq">
        <div class="faq-item-colored">
            <p class="faq-q">
                7. Why didn&apos;t the Hospital buy the land?
            </p>
            <p class="text-justify p-2">
                What we understand is that the Hospital was in negotiations with the Galilee Centre’s Board of Directors for the purchase of the land for many months. We were told that a verbal agreement had been reached. When the agreement was drawn up in writing by the hospital and submitted to Galilee, all communications ceased. It could be suggested that Galilee Center was no longer content with the terms of the agreement, however that was never brought to the attention of the Hospital&apos;s administration.
            </p>
        </div>
    </div>

     <!-- Q8 -->
    <div class="faq">
        <div class="faq-item">
            <p class="faq-q">
                8. Why didn&apos;t the Nature Conservancy of Canada buy the land?
            </p>
            <p class="text-justify p-2">
                The Nature Conservancy of Canada has stated that they expressed an interest in buying the land, and that interest was expressed to the Galilee Center and to OMI Lacombe. The Galilee Centre Board of Directors never responded to this request and no discussions were had. Therefore, they do not know how much land the NCC was interested in purchasing, nor how much they were willing to pay for it.
            </p>
        </div>
    </div>

     <!-- Q9 -->
    <div class="faq">
        <div class="faq-item-colored">
            <p class="faq-q">
                9. Why is STGA not supporting the Galilee Centre?
            </p>
            <p class="text-justify p-2">
                STGA’s commitment is to protect Gillies Grove and the adjacent land. We were looking forward to working together with the Galilee Centre and OMI Lacombe to find alternative solutions to preserve this land for the future of the old-growth forest and for the enjoyment of the community. We are confident that if the Nature Conservancy of Canada is given the chance to purchase this land, in partnership with the community, that the alternative vision of expanding the Grove instead of diminishing it is the responsible solution. Unfortunately, STGA has not been afforded the opportunity to discuss such alternate possibilities with Galilee Centre or OMI Lacombe.
            </p>
        </div>
    </div>

     <!-- Q10 -->
    <div class="faq">
        <div class="faq-item">
            <p class="faq-q">
                10. How can I help?
            </p>
            <p class="text-justify p-2">
                This is one of our most frequently asked questions! Right now we are looking for signatures on our petition, volunteers, and donations. We have devoted a whole page on our website just for this! You can find it <a class="text-(--ui-secondary)" href="/action">here</a>.  While you are there, sign up for our mailing list so you can stay informed. 
            </p>
        </div>
    </div>


</div><!-- Flex -->
           
<p class="pt-5 m-8 my-0">
    If you have any questions that we have not covered on this page, please feel free to send them to us at <a href="mailto:savethegroveagain@gmail.com" class="text-(--ui-secondary)">
        savethegroveagain@gmail.com<br/>
    </a>
</p>
 
</NuxtLayout>
</div></template>

<script setup lang='ts'>
    definePageMeta({ 
        title: 'FAQ', 
    })
</script>
<!--------@/pages/FAQ.vue------------------------------------------------------>