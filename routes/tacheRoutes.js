const express=require('express')
const {gettacheValidator,
      updatetacheValidator,
      deletetacheValidator,
      createtacheValidator,
      
       }=require('../utils/validators/tacheValidator');


const {gettaches,
       createtache,
        gettache,
        updatetache,
        deletetache,
       createFilterObj,
       resizeTacheImages,
       uploadTacheImages
    }=require('../services/tacheService');


const router=express.Router();

router.route('/').get(gettaches)
                 .post(uploadTacheImages,resizeTacheImages,createtacheValidator,createtache)

router.route('/:id').get(gettacheValidator,gettache)
                    .put(updatetacheValidator,updatetache)
                    .delete(deletetacheValidator,deletetache);

module.exports = router;