const mongoose = require('mongoose');

const projetSchema = new mongoose.Schema(
  {
    nom_projet: {
      type: String,
      required: true,
    },
    deadLine: {
      type: Date,
      required: true,
    },
    status: {
        type: String,
        required: true,
        default:"en cours"
      },
      id_superviseur: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: [true, 'projet must be belong to user'],
      },
      id_technicien: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: [true, 'projet must be belong to user'],
      },

    id_client: {
      type: mongoose.Schema.ObjectId,
      ref: 'user',
      required: [true, 'projet must be belong to user'],
    },

  },
  {
    timestamps: true,

  }
);


const Projet=mongoose.model('projet',projetSchema);
module.exports=Projet;