package com.rentatools.RentaTools.service;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.rentatools.RentaTools.entity.Image;
import com.rentatools.RentaTools.entity.dto.ImageDto;
import com.rentatools.RentaTools.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ImageService {
    @Autowired
    private final ImageRepository imageRepository;
    @Autowired
    ObjectMapper mapper;
    public List<Image> getAllImages(){
        return imageRepository.findAll();
    }

    public void createImage(ImageDto imageDto){
        try {
            Image image = mapper.convertValue(imageDto, Image.class);
            imageRepository.save(image);
        }catch (Exception ex){
            throw new RuntimeException("Error en el guardado de la imagen.");
        }
    }
}
