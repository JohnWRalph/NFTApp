<script lang="ts">
    export let attribute;
</script>

<div class="attributeContainers">
    <div class="attribute">
        {attribute.trait_type}
    </div>
    <div class="attributeBottom">
        {attribute.value}
    </div>
</div>

<style>
    .attributeContainers {
      background-color:grey;
        width: 20%;
        text-align: center;
        margin: 5px;
        border-radius: 5px;
    }
    .attributeBottom{
        border-top:1px solid black;
    }
</style>
