<template>
  <div class="review">
    <div class="row">
      <div class="col-12 right">
        <span class="published">20.10.2021</span>
        <i class="material-icons">schedule</i>
      </div>
      <div class="col-12">
        <h1>Title</h1>
      </div>
      <div class="col-12">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          consequuntur dolorum, neque quaerat eum rem alias officiis vero
          voluptates molestias culpa quia vitae optio commodi minus repellendus.
          Ullam, pariatur quasi?<br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          voluptate cupiditate officia voluptates. Exercitationem libero
          blanditiis iste et mollitia at. Sit saepe placeat ad quod tempore est
          at repellendus nesciunt. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quo eveniet ducimus qui et aut laboriosam error
          aliquam nulla aperiam mollitia! Ipsa eos molestiae ducimus maxime
          saepe numquam soluta sunt a. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. <br /><br />
          Dolores nemo animi eveniet aliquid quisquam praesentium aliquam
          corporis, commodi eaque quod hic minima culpa possimus, totam incidunt
          harum fuga expedita porro. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. <br /><br />
          Omnis optio animi distinctio incidunt, reprehenderit veritatis placeat
          doloremque corrupti dolores? Delectus quisquam rem dignissimos quo
          expedita, fugiat sunt ratione veritatis totam! Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Ex ab quia doloremque in quo,
          suscipit architecto ullam quam tempora voluptatibus, voluptates
          inventore quibusdam ipsam exercitationem temporibus aspernatur nam
          asperiores. Animi?
        </p>
      </div>
      <div class="col-12">
        <h4>Support:</h4>
      </div>
      <div class="col-2 col-12-sm">
        <Button link="" bg="#5d3779">BETTOGH</Button>
      </div>
      <div class="col-2 col-12-sm">
        <Button link="" bg="#5d3779">Artist</Button>
      </div>
      <div class="col-4 col-12-sm center">
        <Button link="" bg="#773572">SmartLink</Button>
      </div>
      <div class="col-4 col-12-sm right">
        <ShareButtons title="Title" hashtags="soos,saas,sees" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.review {
  margin: 10px 0;
  border-radius: 15px;
  padding: 25px;
  background-color: var(--bg-secondary);
  color: var(--color-secondary);
  h1 {
    color: var(--color-primary);
  }
  .published,
  .material-icons {
    color: var(--color-light);
    vertical-align: middle;
  }

  .published {
    margin-right: 8px;
  }

  .material-icons {
    font-size: 20px;
  }
}
</style>
